'use client';

import { motion } from 'framer-motion';
import { HeroCarousel } from '@/components/customComponents/hero/hero-carousel';
import { PopularProducts } from '@/components/customComponents/products/popular-products';
import Sale from '@/components/customComponents/sale/sale';
import WhyChoseUs from '@/components/customComponents/whyChoseUs/whyChoseUs';
import News from '@/components/customComponents/news/news';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      key='motion-layout'
      className='flex justify-center flex-col items-center min-w-screen min-h-screen gap-y-10'
    >
      <HeroCarousel />
      <PopularProducts />
      <Sale />
      <WhyChoseUs />
      <News />
    </motion.div>
  );
}
