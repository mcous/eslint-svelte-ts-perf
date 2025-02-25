import { promises as fs } from 'fs';
import path from 'path';

const sourceComponentFile = path.join(
  import.meta.dirname,
  '../src/lib/component.svelte'
);
const sourceModuleFile = path.join(import.meta.dirname, '../src/lib/module.ts');
const fixtureDest = path.join(import.meta.dirname, '../src/lib/fixtures');

const N_FILES = Number(process.argv[2]);

async function createComponents() {
  await fs.rm(fixtureDest, { recursive: true, force: true });
  await fs.mkdir(fixtureDest, { recursive: true });

  await Promise.all(
    Array.from({ length: N_FILES }).flatMap(async (_, i) => {
      const component = path.join(fixtureDest, `component-${i}.svelte`);
      const mod = path.join(fixtureDest, `module-${i}.ts`);

      return [
        fs.copyFile(sourceComponentFile, component),
        fs.copyFile(sourceModuleFile, mod),
      ];
    })
  );
}

if (!Number.isFinite(N_FILES) || N_FILES <= 0) {
  console.error('Usage: node prepare.js <n_files>');
  process.exitCode = 1;
} else {
  await createComponents();
}
