
import graphene
from graphene_django.debug import DjangoDebug

from tareas.schema import Query as TodoSchemeQuery

class Query(TodoSchemeQuery, graphene.ObjectType):
    pass

class Mutation(graphene.ObjectType):
    debug = graphene.Field(DjangoDebug, name='_debug')

schema = graphene.Schema(query=Query, mutation=Mutation)