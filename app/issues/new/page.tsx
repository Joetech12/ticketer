import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});
// import IssueForm from "../_components/IssueForm";

interface Props {
  params: { id: string };
}

// console.log({ num: parseInt("6m45m956n8"), num2: Number("6m45m956n8") });

const NewIssuePage = ({ params }: Props) => {
  return (
    <div>
      <IssueForm />
    </div>
  );
};

export default NewIssuePage;
