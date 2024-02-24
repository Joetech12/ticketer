import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import delay from "delay";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
  const pid = parseInt(params.id);

  //   if (typeof pid !== "number") {
  //     return notFound();
  //   }
  const issue = await prisma.issue.findUnique({
    where: { id: pid },
  });

  if (!issue) notFound();

  await delay(2000);

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap='5'>
      <Box>
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <EditIssueButton issueId={issue?.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
