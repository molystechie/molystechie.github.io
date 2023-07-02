import { defineConfig } from 'astro/config';

// import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://molystechie.github.io'
});

/** Hosting on Github > https://docs.astro.build/en/guides/deploy/github/
How to deploy
You can deploy an Astro site to GitHub Pages by using GitHub Actions to automatically build and deploy your site. To do this, your source code must be hosted on GitHub.


* Set the site and, if needed, base options in astro.config.mjs.
    import { defineConfig } from 'astro/config'
    export default defineConfig({
      site: 'https://johnnylyimo.github.io/my-repo',
      base: '/my-repo',
    })
  
     * site should be https://<YOUR_USERNAME>.github.io or https://my-custom-domain.com
    * base should be your repository’s name starting with a forward slash, for example /my-repo. This is so that Astro understands your website’s root is /my-repo, rather than the default /.
    * 
    *  CAUTION
    If you did not previously have a value for base set, and are only configuring this value so that you can deploy to GitHub, you must update your internal page links to now include your base.
      <a href="/my-repo/about">About</a>


  * Commit your project to GitHub
      	
  * Set deploy source
  On GitHub in your project folder Go to settings of your repository > pages 
  on pages change Deploy source to GitHub Actions and not deploy from a branch 

  * After a minute your site is ready visit : https://johnnylyimo.github.io/my-repo


To modify your site in development, you site run on 
http://localhost:3000/my-repo/
instead of http://localhost:3000/

Where astro-web is base path defined on astro.config file
Once you are done with modification commit and push the changes to Github.
 */