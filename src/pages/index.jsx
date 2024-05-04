function HomePage({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Link href="/[slug]" as={`/${post.slug}`}>
          <div>{post.title}</div>
        </Link>
      ))}
    </div>
  );
}

export default HomePage