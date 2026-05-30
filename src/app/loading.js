export default function Loading() {
  return (

    <div className="flex-1 p-6 animate-pulse">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div className="space-y-3">

          <div className="h-10 w-60 rounded-xl bg-white/10" />

          <div className="h-4 w-40 rounded-xl bg-white/10" />

        </div>

        <div className="flex gap-4">

          <div className="h-10 w-10 rounded-xl bg-white/10" />

          <div className="h-10 w-10 rounded-xl bg-white/10" />

          <div className="h-10 w-10 rounded-xl bg-white/10" />

        </div>

      </div>

      {/* Hero Skeleton */}
      <div className="mt-8 h-52 rounded-3xl bg-white/10" />

      {/* Bento Grid */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {[1,2,3,4].map((item) => (

          <div
            key={item}
            className="h-52 rounded-3xl bg-white/10"
          />

        ))}

      </div>

      {/* Activity */}
      <div className="mt-5 h-64 rounded-3xl bg-white/10" />

      {/* Chart */}
      <div className="mt-5 h-72 rounded-3xl bg-white/10" />

    </div>
  );
}