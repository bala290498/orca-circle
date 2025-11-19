interface AvatarCirclesProps {
  numPeople: number;
  avatarUrls: Array<{
    firstName: string;
    lastName: string;
  }>;
}

export function AvatarCircles({ numPeople, avatarUrls }: AvatarCirclesProps) {
  const visibleAvatars = avatarUrls.slice(0, 12);
  const remainingCount = numPeople - visibleAvatars.length;

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
  };

  const getRandomColor = (index: number) => {
    const colors = [
      'bg-primary-500',
      'bg-secondary-500',
      'bg-accent-500',
      'bg-purple-500',
      'bg-amber-500',
      'bg-slate-500',
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="flex items-center justify-center -space-x-8">
      {visibleAvatars.map((avatar, index) => (
        <div
          key={index}
          className="relative block transition-transform hover:scale-110 hover:z-10"
        >
          <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 border-white ${getRandomColor(index)} text-white font-semibold text-sm shadow-md`}>
            {getInitials(avatar.firstName, avatar.lastName)}
          </div>
        </div>
      ))}
      {remainingCount > 0 && (
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-primary-100 text-primary-700 font-semibold text-sm shadow-md">
          +{remainingCount}
        </div>
      )}
    </div>
  );
}
