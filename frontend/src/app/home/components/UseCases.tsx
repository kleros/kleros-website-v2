import React from "react";

import ExternalLink from "@/components/ExternalLink";
import UseCasesCards from "@/components/UseCasesCards";

const UseCases: React.FC = () => (
  <div className="space-y-8 bg-background-2 px-6 pb-12">
    <h3 className="semibold text-2xl">Title</h3>
    <UseCasesCards />
    <ExternalLink text="Explore" url="google.com" />
  </div>
);

export default UseCases;
