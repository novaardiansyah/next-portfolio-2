'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { Download, FileText, AlertCircle, Sun, Moon, Check, X, ZoomIn } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface FileItem {
  id: number
  code: string
  file_name: string
  file_size: string
  download_url: string
}

interface ApiResponse {
  success: boolean
  message: string
  data: FileItem[]
}

export default function FilesDownloadPage() {
  const params = useParams()
  const uid = params.uid as string

  const [files, setFiles] = useState<FileItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isDark, setIsDark] = useState(false)
  const [downloadedFiles, setDownloadedFiles] = useState<Set<number>>(new Set())
  const [previewFile, setPreviewFile] = useState<FileItem | null>(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = savedTheme === 'dark' || (!savedTheme && prefersDark)
    setIsDark(initialTheme)

    if (initialTheme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  useEffect(() => {
    if (!uid) return

    const fetchFiles = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(`/api/files/${uid}`)

        if (!response.ok) {
          throw new Error('Failed to fetch attachments')
        }

        const data: ApiResponse = await response.json()

        if (!data.success) {
          throw new Error(data.message || 'Failed to fetch attachments')
        }

        setFiles(data.data || [])
      } catch {
        setFiles([])
      } finally {
        setLoading(false)
      }
    }

    fetchFiles()
  }, [uid])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const handleDownload = (file: FileItem) => {
    window.open(file.download_url, '_blank')
    setDownloadedFiles(prev => new Set(prev).add(file.id))
  }

  const getFileExtension = (fileName: string) => {
    const parts = fileName.split('.')
    return parts.length > 1 ? parts[parts.length - 1].toUpperCase() : 'FILE'
  }

  const getFileIcon = (fileName: string) => {
    const ext = fileName.split('.').pop()?.toLowerCase()
    const colors: Record<string, string> = {
      pdf: 'from-red-500 to-red-600',
      doc: 'from-blue-500 to-blue-600',
      docx: 'from-blue-500 to-blue-600',
      xls: 'from-green-500 to-green-600',
      xlsx: 'from-green-500 to-green-600',
      ppt: 'from-orange-500 to-orange-600',
      pptx: 'from-orange-500 to-orange-600',
      zip: 'from-yellow-500 to-yellow-600',
      rar: 'from-yellow-500 to-yellow-600',
      jpg: 'from-purple-500 to-purple-600',
      jpeg: 'from-purple-500 to-purple-600',
      png: 'from-purple-500 to-purple-600',
      gif: 'from-purple-500 to-purple-600',
    }
    return colors[ext || ''] || 'from-gray-500 to-gray-600'
  }

  const isImageFile = (fileName: string) => {
    const ext = fileName.split('.').pop()?.toLowerCase()
    return ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'svg'].includes(ext || '')
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 group cursor-pointer"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/60 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/20 transition-all">
                  <span className="text-white font-bold text-sm">NA</span>
                </div>
                <span className="font-bold text-lg">Nova Ardiansyah</span>
              </motion.div>
            </Link>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full hover:bg-accent"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 min-h-[calc(100vh-9.5rem)] flex flex-col">
        {loading && (
          <div className="space-y-6">
            <div className="flex flex-col items-center mb-8 gap-2">
              <Skeleton className="h-8 w-48 sm:h-10 sm:w-64" />
              <Skeleton className="h-4 w-72 sm:w-96" />
              <Skeleton className="h-4 w-48 sm:w-64" />
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 2xl:grid-cols-4">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="border-border/50 overflow-hidden">
                  <CardHeader className="p-3 pb-2">
                    <div className="flex items-center gap-3">
                      <Skeleton className="w-10 h-10 rounded-lg shrink-0" />
                      <div className="flex-1 space-y-2 min-w-0">
                        <Skeleton className="h-4 w-3/4" />
                        <div className="flex gap-2">
                          <Skeleton className="h-3 w-1/4" />
                          <Skeleton className="h-3 w-1/4" />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 pt-0">
                    <Skeleton className="h-9 w-full rounded-md" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {error && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center min-h-[400px] gap-4"
          >
            <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center">
              <AlertCircle className="w-10 h-10 text-destructive" />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Unable to Load Files</h2>
              <p className="text-muted-foreground max-w-md">{error}</p>
            </div>
          </motion.div>
        )}

        {!loading && !error && files.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center min-h-[400px] gap-4"
          >
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
              <FileText className="w-10 h-10 text-muted-foreground" />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">No Files Found</h2>
              <p className="text-muted-foreground max-w-md">
                There are no files available for download at this time.
              </p>
            </div>
          </motion.div>
        )}

        {!loading && !error && files.length > 0 && (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {files.length} {files.length === 1 ? 'File' : 'Files'} Available
                </span>
              </h2>
              <p className="text-xs text-muted-foreground/70">
                Anyone with this link can view and download these files. <br className="hidden sm:block" />Please only share it with people you trust.
              </p>
            </motion.div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 2xl:grid-cols-4">
              {files.map((file, index) => (
                <motion.div
                  key={file.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden">
                    <CardHeader className="p-3 pb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${getFileIcon(file.file_name)} flex items-center justify-center shadow-md shrink-0`}>
                          <span className="text-white text-[10px] font-bold">
                            {getFileExtension(file.file_name)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-xs font-medium mb-0.5 break-all">
                            {file.file_name}
                          </CardTitle>
                          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                            <span className="truncate">{file.code}</span>
                            <span>•</span>
                            <span className="shrink-0">{file.file_size}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-3 pt-0">
                      <div className="flex gap-2">
                        {isImageFile(file.file_name) && (
                          <Button
                            onClick={() => setPreviewFile(file)}
                            size="sm"
                            variant="outline"
                            className="flex-1 text-xs cursor-pointer"
                          >
                            <ZoomIn className="w-3 h-3" />
                            Preview
                          </Button>
                        )}
                        <Button
                          onClick={() => handleDownload(file)}
                          size="sm"
                          className={`flex-1 text-xs group-hover:shadow-md transition-all duration-300 cursor-pointer ${downloadedFiles.has(file.id)
                            ? 'bg-green-600 hover:bg-green-700'
                            : ''
                            }`}
                          variant={downloadedFiles.has(file.id) ? 'default' : 'default'}
                        >
                          {downloadedFiles.has(file.id) ? (
                            <>
                              <Check className="w-3 h-3" />
                              Downloaded
                            </>
                          ) : (
                            <>
                              <Download className="w-3 h-3" />
                              Download
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />

      <Dialog open={!!previewFile} onOpenChange={() => setPreviewFile(null)}>
        <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] p-0 overflow-hidden">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle className="text-sm font-medium truncate pr-8">
              {previewFile?.file_name}
            </DialogTitle>
          </DialogHeader>
          <div className="relative w-full flex-1 min-h-[300px] max-h-[60vh] bg-muted/30">
            {previewFile && (
              <Image
                src={previewFile.download_url}
                alt={previewFile.file_name}
                fill
                className="object-contain"
                unoptimized
              />
            )}
          </div>
          <div className="p-4 pt-2 flex items-center justify-between gap-4 border-t">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{previewFile?.code}</span>
              <span>•</span>
              <span>{previewFile?.file_size}</span>
            </div>
            <Button
              onClick={() => previewFile && handleDownload(previewFile)}
              size="sm"
              className={`text-xs cursor-pointer ${previewFile && downloadedFiles.has(previewFile.id)
                ? 'bg-green-600 hover:bg-green-700'
                : ''
                }`}
            >
              {previewFile && downloadedFiles.has(previewFile.id) ? (
                <>
                  <Check className="w-3 h-3" />
                  Downloaded
                </>
              ) : (
                <>
                  <Download className="w-3 h-3" />
                  Download
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
