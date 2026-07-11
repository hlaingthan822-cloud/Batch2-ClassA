import ProductCard from "@/components/product-card";

export default function ProductCards() {
  return (
    /* Grid Layout: 1 Column on Mobile, 2 Columns on Tablet, 3 Columns on Desktop */
    <main className="min-h-screen bg-slate-50 p-8 md:p-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl font-black text-slate-950 tracking-tight">
            System Infrastructure Nodes
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Core utility matrix hardware deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            title="Alpha Gate Instance"
            price="249"
            tag="Gateway"
            isStocked={true}
          />
          <ProductCard
            title="Sigma Cache Proxy"
            price="180"
            tag="Caching"
            isStocked={true}
          />
          <ProductCard
            title="Omega Ledger Database"
            price="850"
            tag="Storage"
            isStocked={false}
          />
        </div>
      </div>
    </main>
  );
}
