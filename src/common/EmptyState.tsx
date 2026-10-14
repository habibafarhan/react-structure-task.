type EmptyStateProps = {
  message?: string;
};
export default function EmptyState({
  message = "No data available.",
}: EmptyStateProps) {
  return <p>{message}</p>;
}
