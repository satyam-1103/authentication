"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CreateOpportunity } from "@/components/opportunities/page";
import { format } from "date-fns";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const api_url = process.env.NEXT_PUBLIC_API_URL;

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${api_url}/v1/jobs/`);
        const data = await res.json();
        if (data.success) {
          const verifiedJobs = data.data.filter(
            (job) => job.status === "VERIFIED"
          );
          setJobs(verifiedJobs);
          console.log("ALL jobs", verifiedJobs);
          console.log("Fetched jobs:", verifiedJobs);
        } else {
          console.error("Failed to fetch jobs:", data.message);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex flex-col gap-6 px-4 sm:px-6 md:px-8 lg:px-12 w-full h-full py-6 mt-10">
      <div className="flex flex-col sm:flex-row items-center justify-start text-white">
        <p className="mb-2 sm:mb-0">Have a Job opening?</p>
        <CreateOpportunity />
      </div>
      <div className="text-gray-500 text-xl sm:text-2xl">
        <p>Find the latest job opportunities here.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.length > 0 &&
          jobs.map((job) => (
            <Card
              key={job.id}
              className="w-full bg-base-100 text-white border border-sky-200 outline-none flex flex-col justify-between"
            >
              <CardHeader>
                <div className="space-y-2">
                  <CardTitle className="text-lg sm:text-xl">
                    {job.title.toUpperCase()}
                  </CardTitle>
                  <CardTitle className="text-sm sm:text-base">
                    Posted By: {job.companyName}
                  </CardTitle>
                  <CardTitle className="text-sm sm:text-base">
                    Deadline Date: {format(new Date(job.deadlineDate), "PPP")}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm font-thin line-clamp-3">
                  {job.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="bg-purple-400 hover:bg-purple-500 w-full">
                    Apply
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
      </div>
    </main>
  );
}

export default Jobs;
