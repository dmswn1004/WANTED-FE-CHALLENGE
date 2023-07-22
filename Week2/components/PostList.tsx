import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export interface Post {
    id: string;
    title: string;
    img: string;
    tag: string[];
    date: string;
}
  
export interface PostListProps {
    posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <Form>
      <PostListContainer>
        {posts.map((post) => (
          <Link href={`/${post.id}`}>
            <PostItem key={post.id}>
              <Image src={post.img} width={160} height={160}/>
              <Div><PostTitle>{post.title}</PostTitle></Div>
                {post.tag.map((tag) => (
                  <TagBox><TagForm>{tag}</TagForm></TagBox>
                ))}
            </PostItem>
          </Link>
        ))}
      </PostListContainer>
    </Form>
  );
};

const Form = styled.div`
  width: 40.75rem;
  padding: 4rem 6rem;
`

const PostListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;

const PostItem = styled.div`
  width: 15.625rem;
  height: 15.625rem;
  padding: 0.5rem;
  border-radius: 1.25rem;
  background: rgba(217, 217, 217, 0.13);
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.20);
  text-align: center;

  &:hover {
    background: white;
  }
`;

const Div = styled.div`
  padding: 0.5rem 0;
`

const PostTitle = styled.span`
  color: #000;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TagBox = styled.div`
  display: inline;
  padding: 0.25rem;
`

const TagForm = styled.span`
  padding: 0.125rem 0.5rem;
  border: 2px solid #61DAFB;;
  border-radius: 1.25rem;
`

export default PostList;