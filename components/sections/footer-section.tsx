export function FooterSection() {
  return (
    <footer className="py-8 px-4 border-t border-primary/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} GeniePic. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="https://sites.google.com/view/geniepic-privacy/ana-sayfa"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Privacy
          </a>
          <a
            href="mailto:developertuncay@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
