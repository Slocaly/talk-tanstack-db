import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { t } from '@/i18n';

export function NotFoundPage() {
  useEffect(() => {
    document.title = t('documentTitle.notFound');
  }, []);

  return (
    <Card className="mx-auto max-w-lg text-center">
      <CardHeader>
        <CardTitle className="text-3xl">{t('notFound.title')}</CardTitle>
        <CardDescription>{t('notFound.description')}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <p className="text-muted-foreground">{t('notFound.code')}</p>
        <Button asChild>
          <Link to="/tsq">{t('notFound.backHome')}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
