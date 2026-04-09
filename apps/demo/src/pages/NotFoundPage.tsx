import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page introuvable — Stock du village gaulois'
  }, [])

  return (
    <Card className="mx-auto max-w-lg text-center">
      <CardHeader>
        <CardTitle className="text-3xl">Par Toutatis !</CardTitle>
        <CardDescription>
          Cette page s’est enfuie comme un légionnaire devant un sanglier.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <p className="text-muted-foreground">Erreur 404 — chemin inconnu.</p>
        <Button asChild>
          <Link to="/tsq">Retour au village</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
