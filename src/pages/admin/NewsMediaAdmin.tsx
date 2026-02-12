import AdminLayout from "@/components/admin/AdminLayout";
import NewsMediaList from "@/components/admin/NewsMediaList";
import NewsMediaSettings from "@/components/admin/NewsMediaSettings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NewsMediaAdmin = () => {
  return (
    <AdminLayout>
      <Tabs defaultValue="content" className="space-y-6">
        <TabsList>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="content">
          <NewsMediaList />
        </TabsContent>
        <TabsContent value="settings">
          <NewsMediaSettings />
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default NewsMediaAdmin;
