# FreeCoat Media Library

All website images and videos live here. **Do not** put new project photos in random folders.

## Structure

| Folder | Contents |
|--------|----------|
| `banners/` | Page heroes / landing banners |
| `kitchens/` | Kitchen interiors |
| `living-rooms/` | Living rooms, TV units |
| `bedrooms/` | Bedrooms |
| `ceilings/` | POP ceilings, murals, lighting |
| `interiors/` | Walls, corridors, general interiors |
| `offices/` | Office / marble finishes |
| `exteriors/` | Houses, fences, villas |
| `commercial/` | Churches, plazas, commercial |
| `construction/` | Site work, scaffolding, crew |
| `paving/` | Tiling, paving, outdoor ground |
| `before-after/` | Before / after pairs |
| `showroom/` | Showroom, lab, team, branding |
| `projects/` | Signature mansions / flagship shots |
| `videos/` | All MP4 project videos |

## Rules

1. Add new files into the matching category folder with SEO filenames (`lowercase-with-dashes.jpg`).
2. Update the HTML `src` / `poster` to `freecoat/media/<category>/<filename>`.
3. Site chrome (logo, favicon) stays in `assets/img/`.
4. Old scattered folders are backed up in `freecoat/_archive/` (safe to delete after you confirm the live site).

`index.json` lists every file by category. `path-map.json` maps old paths → new paths from the migration.
