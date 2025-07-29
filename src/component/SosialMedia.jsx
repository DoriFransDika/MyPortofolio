import socialIconsData from '../data/socialIconsData';

    const SosialMedia = ({
      containerClassName = "flex items-center justify-center space-x-4",
      iconBaseClassName = "inline-flex items-center justify-center p-2 rounded-full transition duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
      iconColorClassName = "text-gray-700 hover:text-indigo-600"
    }) => {

  return (
    <div className={containerClassName}>
      {socialIconsData.map((icon) => (
        <a
          key={icon.name}
          href={icon.href}
          aria-label={`Link to ${icon.name} profile`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconBaseClassName} 
                      ${iconColorClassName} 
                      ${icon.additionalClassName || ''}`}>

          {/*  Ukuran icon  */}
        <svg
            className={`w-6 h-6`} 
            viewBox="0 0 24 24"
            aria-hidden="true">
            {icon.bgColorClass && (
              <circle cx="12" cy="12" r="12" className={icon.bgColorClass}></circle>
            )}
            <path d={icon.path} className={icon.iconFillClass || "fill-current"}></path>
        </svg>
          <span className="sr-only">{icon.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SosialMedia;
