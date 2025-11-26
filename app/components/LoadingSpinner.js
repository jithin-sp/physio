export default function LoadingSpinner({ size = 'md', color = '#00C49A' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex items-center justify-center" role="status" aria-live="polite">
      <div
        className={`${sizeClasses[size]} border-4 border-gray-200 border-t-[${color}] rounded-full animate-spin`}
        style={{ borderTopColor: color }}
        aria-label="Loading content"
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
