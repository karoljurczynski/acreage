import { Wrapper, Heading, Subheading } from './StorageHeadingStyles';

const StorageHeading: React.FC = () => {
  return (
    <Wrapper>
      <Heading>Storage</Heading>
      <Subheading>0 / 100</Subheading>
    </Wrapper>
  )
}

export default StorageHeading;