import { useState } from 'react';
import { Upload, FileJson, FileSpreadsheet, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Import() {
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Import Data</h2>
        <p className="text-muted-foreground">Upload CSV or JSON files to import your data</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <FileSpreadsheet className="w-8 h-8 mb-2 text-primary" />
            <CardTitle>CSV Import</CardTitle>
            <CardDescription>
              Import contacts, companies, or opportunities from CSV files
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
              <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground mb-2">
                Drag and drop your CSV file here, or click to browse
              </p>
              <Button variant="outline" size="sm">
                Choose CSV File
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <FileJson className="w-8 h-8 mb-2 text-primary" />
            <CardTitle>JSON Import</CardTitle>
            <CardDescription>
              Import structured data from JSON files
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
              <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground mb-2">
                Drag and drop your JSON file here, or click to browse
              </p>
              <Button variant="outline" size="sm">
                Choose JSON File
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {uploadStatus === 'success' && (
        <Alert>
          <CheckCircle className="h-4 w-4" />
          <AlertTitle>Import Successful</AlertTitle>
          <AlertDescription>
            Your data has been successfully imported. You can now view it in the respective sections.
          </AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Import Guidelines</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Supported Formats</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>CSV files with headers matching field names</li>
              <li>JSON files with properly structured objects</li>
              <li>Maximum file size: 10MB</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Data Types</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Contacts: name, email, phone, title, company</li>
              <li>Companies: name, sector, HQ, website, email</li>
              <li>Opportunities: name, amount, status, closeDate</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
