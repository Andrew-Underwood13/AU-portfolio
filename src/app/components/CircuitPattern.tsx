export function CircuitPattern({ position = 'left' }: { position?: 'left' | 'right' | 'top' | 'bottom' }) {
  const getPositionClasses = () => {
    switch (position) {
      case 'left':
        return 'left-0 top-0 bottom-0 w-48';
      case 'right':
        return 'right-0 top-0 bottom-0 w-48';
      case 'top':
        return 'top-0 left-0 right-0 h-48';
      case 'bottom':
        return 'bottom-0 left-0 right-0 h-48';
    }
  };

  const getGradientMask = () => {
    switch (position) {
      case 'left':
        return 'linear-gradient(to right, rgba(0,0,0,0.15), transparent)';
      case 'right':
        return 'linear-gradient(to left, rgba(0,0,0,0.15), transparent)';
      case 'top':
        return 'linear-gradient(to bottom, rgba(0,0,0,0.15), transparent)';
      case 'bottom':
        return 'linear-gradient(to top, rgba(0,0,0,0.15), transparent)';
    }
  };

  return (
    <div 
      className={`absolute ${getPositionClasses()} pointer-events-none overflow-hidden opacity-40`}
      style={{
        maskImage: getGradientMask(),
        WebkitMaskImage: getGradientMask(),
      }}
    >
      <svg 
        width="100%" 
        height="100%" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-yellow-500/30"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`grad-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Flowing vertical lines */}
        {position === 'left' || position === 'right' ? (
          <>
            <path 
              d="M 20 0 L 20 30 L 40 50 L 40 100 L 20 120 L 20 200" 
              stroke={`url(#grad-${position})`} 
              strokeWidth="1.5" 
              fill="none"
            />
            <path 
              d="M 60 0 L 60 80 L 80 100 L 80 180 L 60 200" 
              stroke={`url(#grad-${position})`} 
              strokeWidth="1.5" 
              fill="none"
            />
            <path 
              d="M 100 50 L 100 100 L 120 120 L 120 200" 
              stroke={`url(#grad-${position})`} 
              strokeWidth="1.5" 
              fill="none"
            />
            
            {/* Connection nodes */}
            <circle cx="20" cy="50" r="2.5" fill="currentColor" opacity="0.4" />
            <circle cx="40" cy="100" r="2.5" fill="currentColor" opacity="0.4" />
            <circle cx="60" cy="100" r="2.5" fill="currentColor" opacity="0.4" />
            <circle cx="80" cy="150" r="2.5" fill="currentColor" opacity="0.4" />
            <circle cx="100" cy="120" r="2.5" fill="currentColor" opacity="0.4" />
            
            {/* Subtle horizontal connectors */}
            <line x1="20" y1="50" x2="60" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.2" />
            <line x1="40" y1="100" x2="80" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          </>
        ) : (
          <>
            {/* Flowing horizontal lines for top/bottom */}
            <path 
              d="M 0 20 L 30 20 L 50 40 L 100 40 L 120 20 L 200 20" 
              stroke={`url(#grad-${position})`} 
              strokeWidth="1.5" 
              fill="none"
            />
            <path 
              d="M 0 60 L 80 60 L 100 80 L 180 80 L 200 60" 
              stroke={`url(#grad-${position})`} 
              strokeWidth="1.5" 
              fill="none"
            />
            <path 
              d="M 50 100 L 100 100 L 120 120 L 200 120" 
              stroke={`url(#grad-${position})`} 
              strokeWidth="1.5" 
              fill="none"
            />
            
            {/* Connection nodes */}
            <circle cx="50" cy="40" r="2.5" fill="currentColor" opacity="0.4" />
            <circle cx="100" cy="80" r="2.5" fill="currentColor" opacity="0.4" />
            <circle cx="150" cy="60" r="2.5" fill="currentColor" opacity="0.4" />
            <circle cx="120" cy="120" r="2.5" fill="currentColor" opacity="0.4" />
          </>
        )}
      </svg>
    </div>
  );
}