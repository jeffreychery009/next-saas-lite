import { Input } from '../ui/input';
import { Button } from '../ui/button';

export default function ProjectNameCard() {
  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border bg-background shadow-xs">
      {/* Header */}
      <div className="p-6 pb-2">
        <h3 className="text-xl font-semibold">Project Name</h3>
        <p className="mt-4 text-sm text-muted-foreground">
          This is the name of your project. For example, “My Project”.
        </p>
      </div>

      {/* Content */}
      <div className="p-6 pt-2">
        <label htmlFor="projectName" className="sr-only">
          Project name
        </label>
        <Input className="md:w-100 w-full" id="projectName" placeholder="My Project..." />
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-border" />

      {/* Bottom muted bar */}
      <div className="flex justify-between bg-muted/40 px-6 py-3 text-sm text-muted-foreground">
        <div className="flex items-center">Please use 32 characters at maximum.</div>
        <div className="">
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}
