<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="prose">
	{@html data.html}
</div>
