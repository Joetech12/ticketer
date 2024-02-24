import { Skeleton } from "@/app/components";

const LoadingIssueNewPage = () => {
  return (
    <div className='max-w-xl'>
            <form className=' space-y-3'>
        <Skeleton width='5rem' />
        <Skeleton height='20rem' />
        <Skeleton width='5rem' />
      </form>
    </div>
  );
};

export default LoadingIssueNewPage;
