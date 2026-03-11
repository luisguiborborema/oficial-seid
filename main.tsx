@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 200 49% 18%;
    --foreground: 34 53% 91%;

    --card: 200 45% 14%;
    --card-foreground: 34 53% 91%;

    --popover: 200 45% 14%;
    --popover-foreground: 34 53% 91%;

    --primary: 30 37% 59%;
    --primary-foreground: 200 49% 18%;

    --secondary: 200 35% 24%;
    --secondary-foreground: 34 53% 91%;

    --muted: 200 30% 22%;
    --muted-foreground: 34 30% 70%;

    --accent: 34 53% 91%;
    --accent-foreground: 200 49% 18%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 30 37% 59%;
    --input: 200 30% 25%;
    --ring: 30 37% 59%;

    --radius: 0.25rem;

    --champagne: 34 53% 91%;
    --gold: 30 37% 59%;
    --petrol: 200 49% 18%;
    --petrol-light: 200 35% 24%;
    --white: 0 0% 100%;

    --font-display: 'Playfair Display', Georgia, serif;
    --font-body: 'Montserrat', system-ui, sans-serif;

    --sidebar-background: 200 45% 14%;
    --sidebar-foreground: 34 53% 91%;
    --sidebar-primary: 30 37% 59%;
    --sidebar-primary-foreground: 200 49% 18%;
    --sidebar-accent: 200 35% 24%;
    --sidebar-accent-foreground: 34 53% 91%;
    --sidebar-border: 30 37% 59%;
    --sidebar-ring: 30 37% 59%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
  }
}

@layer utilities {
  .text-gold {
    color: hsl(var(--gold));
  }

  .text-champagne {
    color: hsl(var(--champagne));
  }

  .text-pure-white {
    color: hsl(var(--white));
  }

  .bg-petrol {
    background-color: hsl(var(--petrol));
  }

  .bg-petrol-light {
    background-color: hsl(var(--petrol-light));
  }

  .bg-gold {
    background-color: hsl(var(--gold));
  }

  .border-gold {
    border-color: hsl(var(--gold));
  }

  .border-champagne {
    border-color: hsl(var(--champagne));
  }

  .font-display {
    font-family: var(--font-display);
  }

  .font-body {
    font-family: var(--font-body);
  }

  .editorial-spacing {
    letter-spacing: 0.15em;
  }

  .wide-spacing {
    letter-spacing: 0.25em;
  }

  .gold-line {
    height: 1px;
    background-color: hsl(var(--gold));
  }

  .gold-line-vertical {
    width: 1px;
    background-color: hsl(var(--gold));
  }

  .texture-linen {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.03' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  }
}
