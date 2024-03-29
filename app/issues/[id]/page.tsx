import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import delay from "delay";
import { notFound } from "next/navigation";
import DeleteIssueButton from "./DeleteIssueButton";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
  const pid = parseInt(params.id);

  
  const issue = await prisma.issue.findUnique({
    where: { id: pid },
  });

  if (!issue) notFound();

  await delay(2000);

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap='5'>
      <Box className='md:col-span-4'>
        <IssueDetails issue={issue} />
      </Box>
      <Flex direction='column' gap='5'>
        <EditIssueButton issueId={issue?.id} />
        <DeleteIssueButton issueId={issue?.id} />
      </Flex>
    </Grid>
  );
};

export default IssueDetailPage;
