import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import delay from "delay";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

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

  // console.log({
  //   type: Number(params.id),
  //   f: typeof Number(params.id) !== "number",
  // });

  return (
    <Box>
      <Heading>{issue?.title}</Heading>
      <Flex gap='3' my='2'>
        <IssueStatusBadge status={issue?.status} />
        <Text>{issue?.createdAt?.toDateString()}</Text>
      </Flex>
      <Card className='prose' mt='4'>
        <ReactMarkdown>{issue?.description}</ReactMarkdown>
      </Card>
    </Box>
  );
};

export default IssueDetailPage;
