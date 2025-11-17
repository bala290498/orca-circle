import Image from "next/image";

interface AvatarCirclesProps {
  numPeople: number;
  avatarUrls: Array<{
    imageUrl: string;
    profileUrl?: string;
  }>;
}

export function AvatarCircles({ numPeople, avatarUrls }: AvatarCirclesProps) {
  const visibleAvatars = avatarUrls.slice(0, 5);
  const remainingCount = numPeople - visibleAvatars.length;

  return (
    <div className="flex items-center justify-center -space-x-4">
      {visibleAvatars.map((avatar, index) => (
        <a
          key={index}
          href={avatar.profileUrl || "#"}
          className="relative block transition-transform hover:scale-110 hover:z-10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={avatar.imageUrl}
            alt={`Avatar ${index + 1}`}
            width={40}
            height={40}
            className="rounded-full border-2 border-white shadow-md"
          />
        </a>
      ))}
      {remainingCount > 0 && (
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-primary-100 text-primary-700 font-semibold text-sm shadow-md">
          +{remainingCount}
        </div>
      )}
    </div>
  );
}
