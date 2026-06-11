'use client'

import * as React from 'react'
import { toast as sonnerToast } from 'sonner'

type ToastProps = {
  title?: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
}

type ToasterToast = ToastProps & {
  id: string | number
}

// Estado global espelhando o que o Sonner tem ativo
const listeners: Array<(toasts: ToasterToast[]) => void> = []
let memoryToasts: ToasterToast[] = []

function dispatch(toasts: ToasterToast[]) {
  memoryToasts = toasts
  listeners.forEach((l) => l(toasts))
}

function toast(props: ToastProps) {
  const id = sonnerToast(props.title ?? '', {
    description: props.description,
    action: props.action
      ? { label: props.action.label, onClick: props.action.onClick }
      : undefined,
    onDismiss: () => {
      dispatch(memoryToasts.filter((t) => t.id !== id))
    },
    onAutoClose: () => {
      dispatch(memoryToasts.filter((t) => t.id !== id))
    },
  })

  dispatch([...memoryToasts, { ...props, id }])

  return {
    id,
    dismiss: () => {
      sonnerToast.dismiss(id)
      dispatch(memoryToasts.filter((t) => t.id !== id))
    },
    update: (newProps: ToastProps) => {
      sonnerToast(newProps.title ?? '', { id, description: newProps.description })
      dispatch(memoryToasts.map((t) => (t.id === id ? { ...t, ...newProps } : t)))
    },
  }
}

function useToast() {
  const [toasts, setToasts] = React.useState<ToasterToast[]>(memoryToasts)

  React.useEffect(() => {
    listeners.push(setToasts)
    return () => {
      const index = listeners.indexOf(setToasts)
      if (index > -1) listeners.splice(index, 1)
    }
  }, [])

  return {
    toasts,
    toast,
    dismiss: (toastId?: string | number) => {
      sonnerToast.dismiss(toastId)
      dispatch(toastId ? memoryToasts.filter((t) => t.id !== toastId) : [])
    },
  }
}

export { useToast, toast }