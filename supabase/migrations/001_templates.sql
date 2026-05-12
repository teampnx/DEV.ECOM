-- DEV.ECOM templates CMS
-- Run in Supabase SQL editor or via supabase db push

create extension if not exists "uuid-ossp";

create table if not exists public.templates (
  id uuid primary key default uuid_generate_v4(),
  slug text not null unique,
  title text not null,
  short_description text not null default '',
  full_description text not null default '',
  category text not null default 'Storefront',
  platforms jsonb not null default '["Shopify"]'::jsonb,
  price numeric(10, 2) not null default 0,
  sale_price numeric(10, 2),
  featured_image text,
  gallery_images jsonb not null default '[]'::jsonb,
  live_demo_url text,
  preview_video_url text,
  features jsonb not null default '[]'::jsonb,
  tech_stack jsonb not null default '[]'::jsonb,
  included_pages jsonb not null default '[]'::jsonb,
  seo_score integer default 99 check (seo_score >= 0 and seo_score <= 100),
  speed_score integer default 98 check (speed_score >= 0 and speed_score <= 100),
  mobile_score integer default 99 check (mobile_score >= 0 and mobile_score <= 100),
  conversion_score integer default 97 check (conversion_score >= 0 and conversion_score <= 100),
  rating numeric(3, 2) default 4.9,
  review_count integer default 0,
  is_featured boolean not null default false,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists templates_category_idx on public.templates (category);
create index if not exists templates_featured_idx on public.templates (is_featured);
create index if not exists templates_published_idx on public.templates (published);

alter table public.templates enable row level security;

-- Public read published templates
create policy "Public read published templates"
  on public.templates for select
  using (published = true);

-- Service role bypasses RLS for admin — use service key from Next.js server only

comment on table public.templates is 'Shopify template marketplace CMS';

-- Create Storage bucket `template-images` (public) in Supabase Dashboard → Storage for CMS uploads.
