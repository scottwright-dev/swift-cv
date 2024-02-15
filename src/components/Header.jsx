import ButtonPrimary from './ButtonPrimary';

export default function Header() {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          CV Builder
        </h2>
      </div>
      <div className="mt-4 flex md:ml-4 md:mt-0">
        <ButtonPrimary text="Create PDF" />
      </div>
    </div>
  );
}
