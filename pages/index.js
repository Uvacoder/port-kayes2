import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Banner from '../components/Home/Banners/Banner.tsx';

export default function Home({ allPostsData }) {
  return (
    <>
      <Banner />
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

