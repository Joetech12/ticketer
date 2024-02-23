import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
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

  // console.log({
  //   type: Number(params.id),
  //   f: typeof Number(params.id) !== "number",
  // });

  return (
    <div>
      <Heading>{issue?.title}</Heading>
      <Flex gap='3' my='2'>
        <IssueStatusBadge status={issue?.status} />
        <Text>{issue?.createdAt?.toDateString()}</Text>
      </Flex>
      <Card className='prose' mt='4'>
        <ReactMarkdown>{issue?.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
