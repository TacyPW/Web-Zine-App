import Steps, { ZineSteps } from "@/app/ui/create/steps";
import { lusitana } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Create a Zine',
  description: 'this page will guide you through the process to create a webzine to print in order to archive a site',
};

export default function page() {

  return (
    <main className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Create a Zine</h1>
      </div>
      <p> {metadata.description} </p>
      <ZineSteps activeStep={4}/>
      

    </main>
    
  );
}

/*
<div >

<div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
  <Search placeholder="Search invoices..." />
  <CreateInvoice />
</div>
<Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
  <Table query={query} currentPage={currentPage} />
</Suspense>
<div className="mt-5 flex w-full justify-center">
  <Pagination totalPages={totalPages} /> 
</div>
</div>
*/