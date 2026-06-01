"use client"

const reels = [
  {
    id: 1,
    title: "YouTube Short 01",
    platform: "YouTube",
    videoUrl: "https://youtube.com/shorts/T5NduhFHjzY?si=iesJmPUrjWb_NsJj",
    embedUrl: "https://www.youtube.com/embed/T5NduhFHjzY",
  },
  {
    id: 2,
    title: "YouTube Short 02",
    platform: "YouTube",
    videoUrl: "https://youtube.com/shorts/IRrK0rGNeYc?si=Ue2T7mpxIohfM0OF",
    embedUrl: "https://www.youtube.com/embed/IRrK0rGNeYc",
  },
  {
    id: 3,
    title: "YouTube Short 03",
    platform: "YouTube",
    videoUrl: "https://youtube.com/shorts/0v9-XP5h_s8?si=UsI9o9uO0tv-nyzT",
    embedUrl: "https://www.youtube.com/embed/0v9-XP5h_s8",
  },
  {
    id: 4,
    title: "Instagram Reel 01",
    platform: "Instagram",
    videoUrl: "https://www.instagram.com/reel/DWgLoO9D1Fw/",
    embedUrl: "https://www.instagram.com/reel/DWgLoO9D1Fw/embed/",
  },
  {
    id: 5,
    title: "Instagram Reel 02",
    platform: "Instagram",
    videoUrl: "https://www.instagram.com/reel/DWLzOHpD0Yq/",
    embedUrl: "https://www.instagram.com/reel/DWLzOHpD0Yq/embed/",
  },
  {
    id: 6,
    title: "Instagram Reel 03",
    platform: "Instagram",
    videoUrl: "https://www.instagram.com/reel/DSmDGOCErIu/",
    embedUrl: "https://www.instagram.com/reel/DSmDGOCErIu/embed/",
  },
]

export function ReelShowcase() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reels.map((reel) => {
          const isInstagram = reel.platform === "Instagram"
          const embedSrc = isInstagram ? `${reel.embedUrl}?hidecaption=1` : reel.embedUrl

          return (
          <article key={reel.id} className="rounded-xl overflow-hidden border border-border bg-card">
            <div className="relative overflow-hidden aspect-[9/16] bg-black">
              <iframe
                src={embedSrc}
                title={reel.title}
                className={isInstagram ? "absolute top-0 left-0 w-full h-[calc(100%+170px)]" : "w-full h-full"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            {reel.platform !== "Instagram" && (
              <a
                href={reel.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="block px-4 py-3 text-sm text-accent hover:text-white transition-colors"
              >
                Watch on {reel.platform}
              </a>
            )}
          </article>
        )})}
      </div>
    </section>
  )
}
