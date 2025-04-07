"use client"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, ShoppingCart, Heart } from "lucide-react"

interface NotificationModalProps {
  type: "success" | "error" | "wishlist" | "cart"
  title: string
  message: string
  isOpen: boolean
  onClose: () => void
  actionLink?: string
  actionText?: string
}

export default function NotificationModal({
  type,
  title,
  message,
  isOpen,
  onClose,
  actionLink,
  actionText,
}: NotificationModalProps) {
  const [open, setOpen] = useState(isOpen)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  const handleClose = () => {
    setOpen(false)
    onClose()
  }

  // Auto-close after 3 seconds for success notifications
  useEffect(() => {
    if (open && type === "success") {
      const timer = setTimeout(() => {
        handleClose()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [open, type])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3">
            {type === "success" && <CheckCircle className="h-6 w-6 text-green-500" />}
            {type === "error" && <AlertCircle className="h-6 w-6 text-red-500" />}
            {type === "wishlist" && <Heart className="h-6 w-6 text-rose-600" />}
            {type === "cart" && <ShoppingCart className="h-6 w-6 text-rose-600" />}
            <DialogTitle>{title}</DialogTitle>
          </div>
          <DialogDescription className="pt-2">{message}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-between">
          <Button variant="outline" onClick={handleClose}>
            Fechar
          </Button>
          {actionLink && actionText && (
            <Button asChild className="bg-rose-600 hover:bg-rose-700">
              <a href={actionLink}>{actionText}</a>
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

