<script>
  import InstitutionMatch from './InstitutionMatch.svelte';
  import { institutionList, isFetching, bestMatch, fetchInstitutions, fetched } from './stores.js';

  function onSubmit(e){
    const formData = new FormData(e.target);
     const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    console.log(data)
    fetchInstitutions(data.institution); 
  }

</script>

<div>
<form on:submit|preventDefault={onSubmit}>
  <label for="institution">Enter Institution Name</label> <input id="institution" type="text" name="institution">
  <button type="submit">Lookup institution's ROR ID</button>
</form>
<p id="best_match">
  {#if $fetched && !$isFetching }
  <InstitutionMatch name={$bestMatch.name} id={$bestMatch.id} aliases={$bestMatch.aliases} acronyms={$bestMatch.acronyms}/>
  {/if}
</p>
</div>

<style>
    input#institution {
        width: 30rem;
        margin: 1rem;
    }
</style>

