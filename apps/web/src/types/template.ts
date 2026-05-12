/** Row shape from Supabase `templates` table */
export type TemplateRecord = {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  full_description: string;
  category: string;
  platforms: string[];
  price: number;
  sale_price: number | null;
  featured_image: string | null;
  gallery_images: string[];
  live_demo_url: string | null;
  preview_video_url: string | null;
  /** Accordion blocks or string array — normalized in mapper */
  features: TemplateFeatureBlock[] | string[];
  tech_stack: string[];
  included_pages: string[];
  seo_score: number | null;
  speed_score: number | null;
  mobile_score: number | null;
  conversion_score: number | null;
  rating: number | null;
  review_count: number | null;
  is_featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
};

export type TemplateFeatureBlock = {
  title: string;
  description: string;
};
