using geradorSchemaMongo.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using System.Linq;
using System.Reflection;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace geradorSchemaMongo
{
    public static class Util
    {
        public static void CreateModel(List<Result> list, String nome) {
            FileStream fs = null;
            StreamWriter sw = null;
            try
            {
                fs = new FileStream(String.Format(@"C:\Users\andre\Documents\Project\CSharp\geradorSchemaMongo\geradorSchemaMongo\ClassTypeScript\{0}.ts", nome.ToLower()), FileMode.CreateNew);
                sw = new StreamWriter(fs);
                //sw.WriteLine(String.Format("))

                sw.WriteLine("import { Document, Schema, Model, model } from 'mongoose';");

                var listImports = list.Where(x => x.Tipo.Contains("Collections") || x.Tipo.Contains("geradorSchemaMongo"));

                foreach (var item in listImports)
                {
                    sw.WriteLine("import {{ {0}Schema, {0}Interface }} from './{1}.schema';", item.Nome,item.Nome.ToLower());
                }
                

                sw.WriteLine(" ");
                sw.WriteLine(String.Format("interface {0}Interface {{", nome));
                foreach (var item in list)
                {
                    

                    if (item.Tipo.Contains("Collections"))
                    {
                        item.Tipo = item.Tipo.Replace("Collections.Generic.List`1[geradorSchemaMongo.Model.", "");
                        item.Tipo = item.Tipo.Replace("]", "");
                        sw.WriteLine(String.Format("    {0}:{1}Interface;", item.Nome, item.Tipo));
                    }
                    else if (item.Tipo.Contains("geradorSchemaMongo"))
                    {
                        sw.WriteLine(String.Format("    {0}:{1}Interface;", item.Nome, item.Tipo.Replace("geradorSchemaMongo.Model.", "")));
                    }
                    else if (item.Tipo.Contains("System.Collections"))
                    {
                        item.Tipo = item.Tipo.Replace("System.Collections.Generic.List`1[System.", "");
                        item.Tipo = item.Tipo.Replace("]", "");
                        sw.WriteLine(String.Format("    {0}:{1}Interface;", item.Nome, item.Tipo));
                    }
                    else
                    {
                        sw.WriteLine(String.Format("    {0}:{1};", item.Nome, item.Tipo.Replace("System.", "")));
                    }
                }

                sw.WriteLine("}");
                sw.WriteLine(" ");
                sw.WriteLine(String.Format("export interface {0}Model extends {0}Interface, Document {{ }}", nome));
                sw.WriteLine(" ");
                sw.WriteLine(String.Format("export const {0}Schema = new Schema({{", nome));
                foreach (var item in list)
                {
                    if (item.Tipo.Contains("Collections"))
                    {
                        item.Tipo = item.Tipo.Replace("Collections.Generic.List`1[geradorSchemaMongo.Model.", "");
                        item.Tipo = item.Tipo.Replace("]", "");
                        sw.WriteLine(String.Format("    {0}:{1}Schema,", item.Nome, item.Tipo));
                    }
                    else if (item.Tipo.Contains("geradorSchemaMongo"))
                    {
                        sw.WriteLine(String.Format("    {0}:{1}Schema,", item.Nome, item.Tipo.Replace("geradorSchemaMongo.Model.", "")));
                    }
                    else if (item.Tipo.Contains("System.Collections"))
                    {
                        item.Tipo = item.Tipo.Replace("System.Collections.Generic.List`1[System.", "");
                        item.Tipo = item.Tipo.Replace("]", "");
                        sw.WriteLine(String.Format("    {0}:{1}Schema,", item.Nome, item.Tipo));
                    }
                    else {
                        sw.WriteLine(String.Format("    {0}:{1},", item.Nome, item.Tipo.Replace("System.", "")));
                    }
                        
                }

                sw.WriteLine("}, {");
                sw.WriteLine("  timestamps: true");
                sw.WriteLine("})");
                sw.WriteLine("");
                sw.WriteLine(String.Format("export const {0}: Model<{0}Model> = model<{0}Model>('{0}', {0}Schema)", nome));
                sw.WriteLine("");
                sw.WriteLine("");
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally {
                if (null != sw) {
                    sw.Close();
                    sw.Dispose();
                }

                if (null != fs) {
                    fs.Close();
                    fs.Dispose();
                }
            }
        }

        public static void CreateGraphQL(List<Result> list, String nome)
        {
            FileStream fs = null;
            StreamWriter sw = null;
            try
            {
                fs = new FileStream(String.Format(@"C:\Users\andre\Documents\Project\CSharp\geradorSchemaMongo\geradorSchemaMongo\ClassTypeScript\{0}-ql.ts", nome.ToLower()), FileMode.CreateNew);
                sw = new StreamWriter(fs);
                //sw.WriteLine(String.Format("))

                sw.WriteLine("import { Field, ID, ObjectType } from 'type-graphql';");

                var listImports = list.Where(x => x.Tipo.Contains("Collections") || x.Tipo.Contains("geradorSchemaMongo"));

                foreach (var item in listImports)
                {
                    sw.WriteLine("import {{ {0}GraphQL,  }} from './{1}.schema';", item.Nome, item.Nome.ToLower());
                }


                sw.WriteLine("");

                sw.WriteLine("@ObjectType()");
                sw.WriteLine(String.Format("export class {0}GraphQL {{", nome));
                foreach (var item in list)
                {


                    if (item.Tipo.Contains("Collections"))
                    {
                        item.Tipo = item.Tipo.Replace("Collections.Generic.List`1[geradorSchemaMongo.Model.", "");
                        item.Tipo = item.Tipo.Replace("]", "");
                        sw.WriteLine(String.Format("    @Field(type => {0})", item.Tipo.Replace("System.", "")));
                        sw.WriteLine(String.Format("    {0}:{1}GraphQL;", item.Nome, item.Tipo.Replace("System.", "")));
                    }
                    else if (item.Tipo.Contains("geradorSchemaMongo"))
                    {
                        item.Tipo = item.Tipo.Replace("geradorSchemaMongo.Model.", "");
                        sw.WriteLine(String.Format("    @Field(type => {0})", item.Tipo.Replace("System.", "")));
                        sw.WriteLine(String.Format("    {0}:{1}GraphQL;", item.Nome, item.Tipo.Replace("System.", "")));
                    }
                    else if (item.Tipo.Contains("System.Collections"))
                    {
                        item.Tipo = item.Tipo.Replace("System.Collections.Generic.List`1[System.", "");
                        item.Tipo = item.Tipo.Replace("]", "");
                        sw.WriteLine(String.Format("    @Field(type => {0})", item.Tipo.Replace("System.", "")));
                        sw.WriteLine(String.Format("    {0}:{1}GraphQL;", item.Nome, item.Tipo.Replace("System.", "")));
                    }
                    else
                    {
                        sw.WriteLine(String.Format("    @Field(type => {0})", item.Tipo.Replace("System.", "")));
                        sw.WriteLine(String.Format("    {0}:{1}GraphQL;", item.Nome, item.Tipo.Replace("System.", "")));
                    }

                    sw.WriteLine("");
                }

                sw.WriteLine("}");
                sw.WriteLine("");

            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if (null != sw)
                {
                    sw.Close();
                    sw.Dispose();
                }

                if (null != fs)
                {
                    fs.Close();
                    fs.Dispose();
                }
            }
        }

        public static string GetDescription<T>(this T e) where T : IConvertible
        {
            string description = null;

            if (e is Enum)
            {
                Type type = e.GetType();
                Array values = System.Enum.GetValues(type);

                foreach (int val in values)
                {
                    if (val == e.ToInt32(CultureInfo.InvariantCulture))
                    {
                        var memInfo = type.GetMember(type.GetEnumName(val));
                        var descriptionAttributes = memInfo[0].GetCustomAttributes(typeof(DescriptionAttribute), false);
                        if (descriptionAttributes.Length > 0)
                        {
                            description = ((DescriptionAttribute)descriptionAttributes[0]).Description;
                        }

                        break;
                    }
                }
            }

            return description;
        }

        public static List<Result> GetParams<T>(T e) where T : class
        {
            Type type = e.GetType();
            List<PropertyInfo> properties = type.GetProperties().ToList();
            return properties.Select(x => new Result () { Nome = x.Name, Tipo = x.PropertyType.ToString() }).ToList<Result>();
        }
    }
}
