using MyService as service from '../../srv/service';

annotate service.Foo with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'bar',
            Value : bar,
        },
    ]
);
annotate service.Foo with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'bar',
                Value : bar,
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
