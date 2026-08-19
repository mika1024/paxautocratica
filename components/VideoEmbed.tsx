import { VIDEOS } from "@/lib/site";

export function VideoEmbed({
  id,
  label,
  autoplay = false,
}: {
  id: string;
  label?: string;
  autoplay?: boolean;
}) {
  const params = new URLSearchParams({
    playsinline: "1",
    rel: "0",
    color: "white",
  });
  if (autoplay) {
    params.set("autoplay", "1");
    params.set("mute", "1");
    params.set("loop", "1");
    params.set("playlist", id);
  }
  return (
    <figure className="my-8">
      <div className="aspect-video w-full overflow-hidden rounded-lg border border-gold/30 bg-card shadow-lg">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`}
          title={label ?? "Pax Autocratica video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
          loading="lazy"
        />
      </div>
      {label && (
        <figcaption className="mt-2 text-center text-sm text-muted">
          ▶ {label}
        </figcaption>
      )}
    </figure>
  );
}

export function RelatedVideos() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold">Watch Pax Autocratica in Action</h2>
      <p className="mt-2 text-muted">
        See the colony management and FPS combat loops in the official trailer.
      </p>
      <VideoEmbed id={VIDEOS.trailer.id} label={VIDEOS.trailer.title} />
    </section>
  );
}
