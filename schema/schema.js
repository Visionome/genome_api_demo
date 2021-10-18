const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } = require('graphql');
const axios = require('axios');

const GeneDataType = new GraphQLObjectType({
    name: 'Data',
    fields: () => ({
        biotype: { type: GraphQLString },
        Symbol: { type: GraphQLString },
        canonical_transcript_length_genomic: { type: GraphQLInt },
        cytoband: { type: new GraphQLList(GraphQLString) },
        canonical_transcript_length_cds: { type: GraphQLInt },
        synonyms: { type: GraphQLInt },
        description: { type: GraphQLString },
        gene_chromosome: { type: GraphQLString },
        gene_end: { type: GraphQLInt },
        canonical_transcript_id: { type: GraphQLString },
        gene_strand: { type: GraphQLInt },
        gene_start: { type: GraphQLInt },
        name: { type: GraphQLString },
        gene_id: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        gene: {
            type: GeneDataType,
            args: { gene_id: { type: GraphQLString } },
            async resolve(parentValue, args) {
                return await axios.get(`https://api.gdc.cancer.gov/genes/${args.gene_id}`)
                    .then(resp => resp.data.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});