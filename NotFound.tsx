export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      admin_assets: {
        Row: {
          category: string
          created_at: string
          icon: string | null
          id: string
          label: string
          url: string
        }
        Insert: {
          category?: string
          created_at?: string
          icon?: string | null
          id?: string
          label: string
          url: string
        }
        Update: {
          category?: string
          created_at?: string
          icon?: string | null
          id?: string
          label?: string
          url?: string
        }
        Relationships: []
      }
      admin_benchmarks: {
        Row: {
          category: string
          created_at: string
          id: string
          notes: string | null
          title: string
          url: string
        }
        Insert: {
          category?: string
          created_at?: string
          id?: string
          notes?: string | null
          title: string
          url: string
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          notes?: string | null
          title?: string
          url?: string
        }
        Relationships: []
      }
      admin_clients: {
        Row: {
          campaign_status: string
          created_at: string
          drive_link: string | null
          id: string
          last_checkin: string | null
          looker_studio_url: string | null
          monthly_value: number | null
          name: string
          next_billing: string | null
          service: string
          status: string
          updated_at: string
        }
        Insert: {
          campaign_status?: string
          created_at?: string
          drive_link?: string | null
          id?: string
          last_checkin?: string | null
          looker_studio_url?: string | null
          monthly_value?: number | null
          name: string
          next_billing?: string | null
          service?: string
          status?: string
          updated_at?: string
        }
        Update: {
          campaign_status?: string
          created_at?: string
          drive_link?: string | null
          id?: string
          last_checkin?: string | null
          looker_studio_url?: string | null
          monthly_value?: number | null
          name?: string
          next_billing?: string | null
          service?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      admin_deliverables: {
        Row: {
          assignee: string | null
          client_name: string | null
          created_at: string
          due_date: string | null
          id: string
          status: string
          title: string
          type: string
          updated_at: string
        }
        Insert: {
          assignee?: string | null
          client_name?: string | null
          created_at?: string
          due_date?: string | null
          id?: string
          status?: string
          title: string
          type?: string
          updated_at?: string
        }
        Update: {
          assignee?: string | null
          client_name?: string | null
          created_at?: string
          due_date?: string | null
          id?: string
          status?: string
          title?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      admin_financial_kpis: {
        Row: {
          created_at: string
          id: string
          investments: number | null
          month: string
          mrr: number | null
          operational_costs: number | null
          revenue_oneoff: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          investments?: number | null
          month: string
          mrr?: number | null
          operational_costs?: number | null
          revenue_oneoff?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          investments?: number | null
          month?: string
          mrr?: number | null
          operational_costs?: number | null
          revenue_oneoff?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      admin_performance_metrics: {
        Row: {
          ad_spend: number
          client_id: string
          conversions: number
          created_at: string
          id: string
          leads_generated: number
          period_date: string
          revenue_generated: number
        }
        Insert: {
          ad_spend?: number
          client_id: string
          conversions?: number
          created_at?: string
          id?: string
          leads_generated?: number
          period_date?: string
          revenue_generated?: number
        }
        Update: {
          ad_spend?: number
          client_id?: string
          conversions?: number
          created_at?: string
          id?: string
          leads_generated?: number
          period_date?: string
          revenue_generated?: number
        }
        Relationships: [
          {
            foreignKeyName: "admin_performance_metrics_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "admin_clients"
            referencedColumns: ["id"]
          },
        ]
      }
      admin_pipeline_leads: {
        Row: {
          company: string | null
          created_at: string
          email: string | null
          id: string
          name: string
          notes: string | null
          phone: string | null
          priority: string
          source: string | null
          status: string
          updated_at: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name: string
          notes?: string | null
          phone?: string | null
          priority?: string
          source?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name?: string
          notes?: string | null
          phone?: string | null
          priority?: string
          source?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      admin_sops: {
        Row: {
          category: string
          created_at: string
          description: string | null
          id: string
          title: string
          url: string | null
        }
        Insert: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          title: string
          url?: string | null
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          title?: string
          url?: string | null
        }
        Relationships: []
      }
      client_automations: {
        Row: {
          automation_name: string
          client_id: string
          created_at: string
          description: string | null
          id: string
          status: string
          updated_at: string
        }
        Insert: {
          automation_name: string
          client_id: string
          created_at?: string
          description?: string | null
          id?: string
          status?: string
          updated_at?: string
        }
        Update: {
          automation_name?: string
          client_id?: string
          created_at?: string
          description?: string | null
          id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_automations_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "admin_clients"
            referencedColumns: ["id"]
          },
        ]
      }
      client_files: {
        Row: {
          category: string
          client_id: string
          created_at: string
          id: string
          label: string
          url: string
        }
        Insert: {
          category?: string
          client_id: string
          created_at?: string
          id?: string
          label: string
          url: string
        }
        Update: {
          category?: string
          client_id?: string
          created_at?: string
          id?: string
          label?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_files_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "admin_clients"
            referencedColumns: ["id"]
          },
        ]
      }
      client_profiles: {
        Row: {
          client_id: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          client_id: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          client_id?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_profiles_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "admin_clients"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
