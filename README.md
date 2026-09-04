# ericthmoritsuka.github.io

Personal site and blog, built with [Jekyll](https://jekyllrb.com/) and published by GitHub Pages. Pushing to `main` rebuilds and publishes the site automatically — there is no manual build step.

## How the source is organized

| Path | What it is |
| --- | --- |
| `_layouts/default.html` | Page skeleton: `<head>`, header/nav, footer. Every page uses it. |
| `_layouts/post.html` | Blog post frame: banner image, title, tags, date. |
| `_includes/` | Shared fragments (header, footer, date formatting). |
| `_posts/` | One file per blog post (see below). |
| `index.html` / `indexEnglish.html` | Profile pages (PT / EN). Only page content — no boilerplate. |
| `portfolio.html` / `portfolioEnglish.html` | Portfolio pages (PT / EN). |
| `blog.html` | Blog index. Generated from `_posts/` — never edit the post list by hand. |
| `css/`, `img/`, `js/`, `blog-posts/images/` | Static assets, copied as-is. |

The "Last updated on" line in the header shows the date of the latest deploy automatically.

## Writing a new blog post

1. Add a Markdown file to `_posts/` named `YYYY-MM-DD-short-slug.md` (the date and slug set the post's date and URL).
2. Start it with front matter, then write the post in Markdown:

   ```markdown
   ---
   title: My post title
   tags: [Life, Work]
   image: /blog-posts/images/short-slug.png
   image_alt: "Description of the banner image"
   ---
   First paragraph...
   ```

3. Put the banner image in `blog-posts/images/`.
4. Commit and push (or use "Add file" on github.com). The post appears on the blog index automatically, newest first, at `/blog-posts/short-slug.html`.

A post that needs custom HTML (like the actors section in "What is my calling?") can be a `.html` file in `_posts/` instead — same front matter, raw HTML body.

## Previewing locally (optional)

With Ruby installed: `bundle install && bundle exec jekyll serve`, then open http://localhost:4000.
Without Ruby, via podman/docker:

```sh
podman run --rm -v "$PWD":/srv/jekyll:Z -p 4000:4000 docker.io/jekyll/jekyll:4 jekyll serve --host 0.0.0.0
```
