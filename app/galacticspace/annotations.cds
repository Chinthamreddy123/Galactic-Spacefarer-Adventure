using MyProjectService as service from '../../srv/service';

annotate service.Spacefarers with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Value : stardustCollection,
        },
        {
            $Type : 'UI.DataField',
            Value : Navskill,
        },
        {
            $Type : 'UI.DataField',
            Value : originPlanet,
        },
        {
            $Type : 'UI.DataField',
            Value : spacesuitColor,
        },
    ]
);
annotate service.Spacefarers with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : name,
            },
            {
                $Type : 'UI.DataField',
                Value : stardustCollection,
            },
            {
                $Type : 'UI.DataField',
                Value : Navskill,
            },
            {
                $Type : 'UI.DataField',
                Value : originPlanet,
            },
            {
                $Type : 'UI.DataField',
                Value : spacesuitColor,
            },
            {
                $Type : 'UI.DataField',
                Value : Email,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
