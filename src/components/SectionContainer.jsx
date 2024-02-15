import InputSection from './InputSection';
import OutputSection from './OutputSection';

export default function SectionContainer() {
  return (
    <div className="flex min-h-screen pt-4">
      <InputSection />
      <OutputSection />
    </div>
  );
}
