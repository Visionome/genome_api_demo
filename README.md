# Visionome Team
## For demo
To start demo, run `npm run dev` and navigate to [here](http://localhost/4000/graphql.)
Write a query and execute it. Here is an example query:
```
{
  gene(gene_id: "ENSG00000128573") {
    name
    gene_id
    gene_start
    gene_end
    gene_chromosome
    description
    cytoband
  }
}
```
