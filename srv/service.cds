using db.Foo as Bar from '../db/schema';

service MyService {

    entity Foo as projection on Bar;
    annotate Foo with @odata.draft.enabled;
    
}
