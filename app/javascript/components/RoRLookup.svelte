<script>
  import InstitutionMatch from './InstitutionMatch.svelte';
  import { institutionList, isFetching, fetchInstitutions } from './stores.js';

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
<ul id="ror_matches">

  {#each $institutionList as institution (institution.id)}
    <InstitutionMatch name={institution.name}, id={institution.id}, aliases={institution.aliases}/>
  {/each}
   <li> Next line is a test of the nested component InstitutionMatch</li>
  <InstitutionMatch name={"Foo"} id={"123"} aliases={"Bar"}/>
 <!-- {#each institutionList as {institution}, i}
 <InstitutionMatch name={institution.name} id={institution.id}>
 {/each}  -->
</ul>
</div>

<style>
    input#institution {
        width: 30rem;
        margin: 1rem;
    }
</style>

